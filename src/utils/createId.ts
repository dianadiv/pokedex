export const createId = (id: number) => {
    return id.toString().padStart(3, '0')
}