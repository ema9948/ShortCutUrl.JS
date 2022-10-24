

const hashCode = s => s.split('').reduce((a, b) => (((a << 2) - a) + b.charCodeAt(0)) | 0, 0)

export default hashCode;