import cv2

# Load the pre-trained cascade classifiers
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
gender_cascade = cv2.CascadeClassifier('haarcascade_frontalface_alt.xml')
age_cascade = cv2.CascadeClassifier('haarcascade_frontalface_alt2.xml')

# Function to detect gender and age from the face region
def detect_gender_and_age(gray, faces):
    gender_labels = ['Male', 'Female']
    age_list = ['(0-2)', '(4-6)', '(8-12)', '(15-20)', '(25-32)', '(38-43)', '(48-53)', '(60-100)']

    for (x, y, w, h) in faces:
        face_roi_gray = gray[y:y + h, x:x + w]
        gender = gender_cascade.detectMultiScale(face_roi_gray)
        age = age_cascade.detectMultiScale(face_roi_gray)
        print(age,gender)

        for (gx, gy, gw, gh) in gender:
            gender_label = gender_labels[0 if gx < (w//2) else 1]
            cv2.rectangle(face_roi_gray, (gx, gy), (gx + gw, gy + gh), (255, 0, 0), 2)
            cv2.putText(face_roi_gray, gender_label, (gx, gy - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 0, 0), 2)
            
        for (ax, ay, aw, ah) in age:
            age_label = age_list[get_age_label(ax, w)]
            cv2.rectangle(face_roi_gray, (ax, ay), (ax + aw, ay + ah), (0, 255, 0), 2)
            cv2.putText(face_roi_gray, age_label, (ax, ay - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

        return face_roi_gray, gender_label, age_label

def get_age_label(x, w):
    age_ranges = [0, 4, 8, 15, 25, 38, 48, 60, 100]
    age_labels = ['(0-2)', '(4-6)', '(8-12)', '(15-20)', '(25-32)', '(38-43)', '(48-53)', '(60-100)']

    for i in range(len(age_ranges) - 1):
        if age_ranges[i] <= x < age_ranges[i + 1]:
            return i

    return len(age_ranges) - 1

# Load the image
image_path = 'avatar-gencdb98e5f3e1e4dfbbc13c1803d868d3f.jpg'
image = cv2.imread(image_path)

# Convert the image to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Detect faces in the image
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

# Detect gender and age for each face
face_with_gender_and_age, gender_label, age_label = detect_gender_and_age(gray, faces)

# Print the detected age and gender
print("Gender: ", gender_label)
print("Age: ", age_label)