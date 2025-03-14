const formatDate = (date: string) => {
    return new Date(date).toLocaleString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
}

export default formatDate