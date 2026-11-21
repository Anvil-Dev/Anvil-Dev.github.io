const colors = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#E8BAFF', '#FFB3DE']

export function avatarColor(name: string) {
  let hash = 0
  for (const char of name) hash = (hash * 31 + char.codePointAt(0)!) % 100000
  return colors[hash % colors.length]
}

export function initials(name: string) {
  const chars = Array.from(name.trim())
  if (!chars.length) return '?'
  return chars[0].codePointAt(0)! > 0x2e80 ? chars[0] : chars.slice(0, 2).join('')
}
