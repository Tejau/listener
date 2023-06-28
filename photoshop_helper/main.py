import os
from psd_tools import PSDImage

def extract_images_from_psd(psd_file_path, output_directory):
    psd = PSDImage.open(psd_file_path)

    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    for layer in psd.descendants():
        if layer.is_visible:
            layer_name = layer.name
            layer_name = layer_name.replace('/', '_')  # Remove invalid characters from layer name

            image = layer.topil()
            image.save(os.path.join(f"{layer_name}.png"), "PNG")

    psd.close()

# Usage example
# psd_file_path = "path/to/your.psd"
# output_directory = "path/to/output/directory"
# extract_images_from_psd(psd_file_path, output_directory)

psd_file_path = "CT_SkillTest_v3.psd"
output_directory = "./"
extract_images_from_psd(psd_file_path, output_directory)
