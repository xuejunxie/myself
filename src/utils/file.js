export const canvasToBase64 = (canvasElem, fileType) => canvasElem.toDataURL(fileType);
export const base64ToBlob = async (base64Url) => {
  const res = await fetch('data:application/octet-stream;' + base64Url);
  return await res.blob();
};
export const downloadFile = (base64Url) => {
  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = base64Url;
  link.click();
};
