export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\. /g, '-')
    .replace('.', '');
};

export const formatHtml = (htmlString) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export const getNavDataFromUrl = (data, pathname) => {
  for (const category of Object.values(data)) {
    const child = category.children?.find((child) => child.path === pathname);
    if (child) {
      return { categoryPath: category, currentPathName: child.name };
    }
  }
  return { categoryPath: null, currentPathName: null };
};
