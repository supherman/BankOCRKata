ZERO = [
  " _ ",
  "| |",
  "|_|",
]

ONE = [
  "   ",
  "  |",
  "  |",
]

TWO = [
  " _ ",
  " _|",
  "|_ ",
]

THREE = [
  " _ ",
  " _|",
  " _|",
]

FOUR = [
  "   ",
  "|_|",
  "  |",
]

FIVE = [
  " _ ",
  "|_ ",
  " _|",
]

SIX = [
  " _ ",
  "|_ ",
  "|_|",
]
SEVEN = [
  " _ ",
  "  |",
  "  |",
]

EIGHT = [
  " _ ",
  "|_|",
  "|_|",
]

NINE = [
  " _ ",
  "|_|",
  " _|",
]

DIGIT_MAP = {
  ZERO => 0,
  ONE => 1,
  TWO => 2,
  THREE => 3,
  FOUR => 4,
  FIVE => 5,
  SIX => 6,
  SEVEN => 7,
  EIGHT => 8,
  NINE => 9,
}

def extract_lines(file)
  File.readlines(file).each_slice(4).map do |entry|
    entry.pop
    entry
  end
end

def extract_digits(line)
  line.map do |line_row|
    line_row.scan(/.../)
  end.transpose.map do |digit_array|
    DIGIT_MAP[digit_array]
  end
end

account_numbers = extract_lines("use_case_1_in.txt").map do |line|
  extract_digits(line).join
end

puts account_numbers