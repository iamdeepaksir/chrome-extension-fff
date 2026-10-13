/**
 * Automated Verification Test Script for Deepak Sheoran Central Extension Platform
 */

import { validateDodoLicenseKey, parseAndValidateLicenseKeys, siteConfig } from '../src/config/siteConfig.ts';
import { extensions, getExtensionBySlug, extensionCategories } from '../src/data/extensions.ts';
import fs from 'fs';
import path from 'path';

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`PASS: ${testName}`);
    passed++;
  } else {
    console.error(`FAIL: ${testName}`);
    failed++;
  }
}

console.log('--- Running Platform Verification Tests ---');

// 1. Business & Site Config Verification
assert(siteConfig.businessOwner === 'Deepak Sheoran', 'Business owner is configured as Deepak Sheoran');
assert(siteConfig.supportEmail === 'YOUR_VERIFIED_SUPPORT_EMAIL', 'Support email uses configurable placeholder without guesswork');
assert(siteConfig.productionBaseUrl === 'YOUR_FINAL_DOMAIN', 'Production domain uses configurable placeholder without guesswork');

// 2. Central Extension Catalog Verification
assert(extensions.length >= 1, 'Extensions catalog has at least one entry');
const flowAutomator = getExtensionBySlug('flow-automator');
assert(Boolean(flowAutomator), 'Flow Automator is present in extensions catalog');
assert(flowAutomator.status === 'coming_soon', 'Flow Automator status is coming_soon (unreleased)');
assert(flowAutomator.officialDownloadUrl === null, 'Flow Automator has no invented Chrome Web Store URL (null)');
assert(Array.isArray(flowAutomator.features) && flowAutomator.features.length >= 4, 'Flow Automator has complete features list');
assert(Boolean(flowAutomator.privacyDisclosure), 'Flow Automator has privacy disclosure');

// 3. Category & Filter Verification
assert(extensionCategories.length >= 4, 'Categories list is populated');
assert(extensionCategories.includes('Productivity & Automation'), 'Categories includes Productivity & Automation');

// 4. Dodo Payments License Key Validator Tests
assert(!validateDodoLicenseKey(''), 'Validator rejects empty string');
assert(!validateDodoLicenseKey('   '), 'Validator rejects whitespace');
assert(!validateDodoLicenseKey('abc'), 'Validator rejects keys shorter than 8 chars');
assert(!validateDodoLicenseKey('<script>alert(1)</script>'), 'Validator rejects XSS injection attempt');
assert(!validateDodoLicenseKey('key with spaces in it'), 'Validator rejects keys with internal spaces');
assert(validateDodoLicenseKey('DODO-8392-KF92-9182'), 'Validator accepts standard Dodo-formatted key');
assert(validateDodoLicenseKey('DODO_LICENSE_PRO_12345678'), 'Validator accepts alphanumeric-underscore key');

// 5. Multiple Keys Parsing Tests
const emptyTest = parseAndValidateLicenseKeys(null);
assert(emptyTest.length === 0, 'parseAndValidateLicenseKeys returns empty array on null');

const invalidParamTest = parseAndValidateLicenseKeys('<evil>,short,bad*symbol');
assert(invalidParamTest.length === 0, 'parseAndValidateLicenseKeys rejects all invalid candidates');

const singleValidKey = parseAndValidateLicenseKeys('DODO-FLOW-TEST-KEY-1234');
assert(singleValidKey.length === 1 && singleValidKey[0] === 'DODO-FLOW-TEST-KEY-1234', 'parseAndValidateLicenseKeys captures valid single key');

const multiKeyString = 'DODO-KEY-1111-2222,DODO-KEY-3333-4444,DODO-KEY-5555-6666';
const multiKeys = parseAndValidateLicenseKeys(multiKeyString);
assert(multiKeys.length === 3, 'parseAndValidateLicenseKeys parses 3 valid comma-separated keys');

const maxCapString = 'DODO-K1-111111,DODO-K2-222222,DODO-K3-333333,DODO-K4-444444,DODO-K5-555555,DODO-K6-666666';
const cappedKeys = parseAndValidateLicenseKeys(maxCapString);
assert(cappedKeys.length === 5, 'parseAndValidateLicenseKeys caps at maximum 5 keys');

// 6. Cloudflare Pages Deployment Assets
assert(fs.existsSync('./public/_headers'), 'public/_headers exists');
assert(fs.existsSync('./public/_redirects'), 'public/_redirects exists');
assert(fs.existsSync('./public/robots.txt'), 'public/robots.txt exists');
assert(fs.existsSync('./public/sitemap.xml'), 'public/sitemap.xml exists');

// Verify _headers contents
const headersContent = fs.readFileSync('./public/_headers', 'utf-8');
assert(headersContent.includes('X-Content-Type-Options: nosniff'), '_headers has nosniff');
assert(headersContent.includes('/thank-you'), '_headers defines rules for /thank-you');
assert(headersContent.includes('noindex, nofollow'), '_headers sets noindex on /thank-you');

// Verify _redirects SPA fallback
const redirectsContent = fs.readFileSync('./public/_redirects', 'utf-8');
assert(redirectsContent.includes('/*    /index.html   200') || redirectsContent.includes('/* /index.html 200'), '_redirects sets SPA fallback to index.html');

// Verify robots.txt blocks /thank-you
const robotsContent = fs.readFileSync('./public/robots.txt', 'utf-8');
assert(robotsContent.includes('Disallow: /thank-you'), 'robots.txt blocks /thank-you from crawlers');

// Verify dist output
assert(fs.existsSync('./dist/index.html'), 'dist/index.html generated');
assert(fs.existsSync('./dist/_headers'), 'dist/_headers copied');
assert(fs.existsSync('./dist/_redirects'), 'dist/_redirects copied');

console.log(`\nVerification Summary: ${passed} Passed, ${failed} Failed.`);
if (failed > 0) {
  process.exit(1);
}
