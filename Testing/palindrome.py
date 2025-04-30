user_input = input("Enter a string: ")
cleaned_string = user_input.replace(" ", "").lower()
if cleaned_string == cleaned_string[::-1]:
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")