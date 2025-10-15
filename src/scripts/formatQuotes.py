import json
from pathlib import Path

# === CONFIG ===
# Path to your raw data file (relative to this script)
INPUT_PATH = Path("src/data/rawQuotes.json")

# Output files (they'll be created in the same folder as INPUT_PATH)
BY_AUTHOR_PATH = INPUT_PATH.parent / "quotes_by_author.json"
BY_LENGTH_PATH = INPUT_PATH.parent / "quotes_by_length.json"

# === LOAD QUOTES ===
with open(INPUT_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)
    quotes = data["quotes"]

# Check data format
if not isinstance(quotes, list):
    raise ValueError(f"Expected a list of quote objects in {INPUT_PATH}")

# === SORT BY AUTHOR ===
quotes_by_author = sorted(quotes, key=lambda q: q.get("author", "").lower())

# === SORT BY QUOTE LENGTH ===
quotes_by_length = sorted(quotes, key=lambda q: len(q.get("quote", "")))

# === WRITE OUTPUT ===
with open(BY_AUTHOR_PATH, "w", encoding="utf-8") as f:
    json.dump(quotes_by_author, f, indent=2, ensure_ascii=False)

with open(BY_LENGTH_PATH, "w", encoding="utf-8") as f:
    json.dump(quotes_by_length, f, indent=2, ensure_ascii=False)

print(f"✅ Created:\n - {BY_AUTHOR_PATH}\n - {BY_LENGTH_PATH}")