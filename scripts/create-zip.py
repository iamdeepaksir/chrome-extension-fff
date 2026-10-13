import zipfile
import os

dist_dir = 'dist'
zip_filename = 'cloudflare-deployment.zip'

if not os.path.exists(dist_dir):
    raise FileNotFoundError(f"Directory '{dist_dir}' not found. Run 'npm run build' first.")

with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(dist_dir):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, dist_dir)
            zipf.write(file_path, arcname)

print(f"Created {zip_filename} with contents:")
with zipfile.ZipFile(zip_filename, 'r') as zipf:
    for info in zipf.infolist():
        print(f"  {info.filename} ({info.file_size} bytes)")
