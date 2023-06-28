import cv2
import numpy as np

# Load the pre-trained models
age_net = cv2.dnn.readNet('deploy.prototxt', 'age_net.caffemodel')
gender_net = cv2.dnn.readNet('deploy.prototxt', 'gender_net.caffemodel')

# Load the image
image_path = 'avatar-gencdb98e5f3e1e4dfbbc13c1803d868d3f.jpg'
image = cv2.imread(image_path)

# Preprocess the image
blob = cv2.dnn.blobFromImage(image, 1, (227, 227), (78.4263377603, 87.7689143744, 114.895847746), swapRB=False)

# Set the input for age and gender models
age_net.setInput(blob)
gender_net.setInput(blob)

# Run forward pass through the models
age_predictions = age_net.forward()
gender_predictions = gender_net.forward()

# Get the predicted age
age_index = np.argmax(age_predictions)
age = age_index

# Get the predicted gender
gender_index = np.argmax(gender_predictions)
gender_list = ['Male', 'Female']
gender = gender_list[gender_index]

# Display the predicted age and gender
text = f"Gender: {gender}, Age: {age}"
print(text)
# cv2.putText(image, text, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
# cv2.imshow("Age and Gender Detection", image)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
