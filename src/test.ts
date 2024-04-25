import select from '@inquirer/select'

export const selectNamespace = async (namespaces: string[]): Promise<string> => {
  if (namespaces.length === 0) {
    throw new Error('네임스페이스를 찾을 수 없습니다.')
  }

  if (namespaces.length === 1) {
    return namespaces[0]
  }

  return select({
    choices: namespaces.map((it) => ({
      name: it,
      value: it,
    })),
    message: '네임스페이스를 골라주세요.',
  })
}
