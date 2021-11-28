const validateWebsiteUrl = (websiteUrl) => {
  const urlRegEx = new RegExp(
      '(http|ftp|https)://[\\w-]+(\\.[\\w-]+)+([\\w-.,@?^=%&:/~+#-]*[\\w@?^=%&;/~+#-])?',
  );
  return urlRegEx.test(String(websiteUrl).toLowerCase());
};

export default validateWebsiteUrl;