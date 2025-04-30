text = "Natural Language Processing"
lower_text = text.lower()
print("Lowercase String:", lower_text)

position = text.find("Language")
print("Position of 'Language':", position)

replaced_text = text.replace("Processing", "Analysis")
print("Replaced String:", replaced_text)

ends_with_analysis = replaced_text.endswith("Analysis")
print("Ends with 'Analysis':", ends_with_analysis)

a_count = text.count('a') + text.count('A')
print("Occurrences of 'a':", a_count)