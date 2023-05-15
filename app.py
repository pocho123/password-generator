import random
import string

# Password generator function
def generate_password(length=10):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for _ in range(length))
    return password


# Password saver function
def save_password(url, username, password):
    # Save the password to a file or database
    # Add your saving logic here
    print(f"URL: {url}, Username: {username}, Password: {password} - Saved successfully.")
password = generate_password()
print(password)

# Example usage
url = "https://example.com"
username = "john.doe"
password = generate_password()
save_password(url, username, password)
