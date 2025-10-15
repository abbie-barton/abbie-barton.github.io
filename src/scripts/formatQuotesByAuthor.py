import json
from pathlib import Path
from collections import defaultdict

# === CONFIG ===
INPUT_PATH = Path("src/data/rawQuotes.json")
OUTPUT_PATH = INPUT_PATH.parent / "quotes_by_author_sorted.json"

# === LOAD QUOTES ===
with open(INPUT_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)
    quotes = data["quotes"]

# Check data format
if not isinstance(quotes, list):
    raise ValueError(f"Expected a list of quote objects in {INPUT_PATH}")

# === GROUP QUOTES BY AUTHOR INITIAL ===
quotes_by_author_letter = defaultdict(list)

def get_sort_name(author: str) -> str:
    """Determine which part of the author's name to use for sorting."""
    parts = author.strip().split()
    if len(parts) == 1 or len(parts) > 3:
        return parts[0]  # first name
    else:
        return parts[-1]  # last name

for q in quotes:
    author = q.get("author", "").strip()
    if not author:
        continue
    sort_name = get_sort_name(author)
    first_char = sort_name[0].upper()
    quotes_by_author_letter[first_char].append(q)

# === SORT QUOTES WITHIN EACH LETTER BY AUTHOR ===
for letter in quotes_by_author_letter:
    quotes_by_author_letter[letter].sort(key=lambda q: get_sort_name(q["author"]).lower())

# === SORT LETTERS ALPHABETICALLY ===
quotes_by_author_letter = dict(sorted(quotes_by_author_letter.items()))

# === WRITE OUTPUT ===
with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    json.dump(quotes_by_author_letter, f, indent=2, ensure_ascii=False)

print(f"✅ Created '{OUTPUT_PATH}' successfully!")
