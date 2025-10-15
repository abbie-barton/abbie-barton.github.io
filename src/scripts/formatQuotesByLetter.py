import json
from pathlib import Path
from collections import defaultdict

# === CONFIG ===
INPUT_PATH = Path("src/data/rawQuotes.json")
OUTPUT_PATH = INPUT_PATH.parent / "quotes_by_first_letter_sorted.json"

# === LOAD QUOTES ===
with open(INPUT_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)
    quotes = data["quotes"]

# Check data format
if not isinstance(quotes, list):
    raise ValueError(f"Expected a list of quote objects in {INPUT_PATH}")

# === GROUP BY FIRST LETTER ===
quotes_by_letter = defaultdict(list)

for q in quotes:
    text = q.get("quote", "").strip()
    if text:  # skip empty quotes
        first_char = text[0].upper()
        quotes_by_letter[first_char].append(q)

# === SORT QUOTES WITHIN EACH LETTER ===
for letter in quotes_by_letter:
    quotes_by_letter[letter] = sorted(quotes_by_letter[letter], key=lambda x: x["quote"].lower())

# === SORT LETTERS ALPHABETICALLY ===
quotes_by_letter = dict(sorted(quotes_by_letter.items()))

# === WRITE OUTPUT ===
with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    json.dump(quotes_by_letter, f, indent=2, ensure_ascii=False)

print(f"✅ Created '{OUTPUT_PATH}' successfully!")
