// Mock IPFS upload function
// In production, you would use a service like Pinata, nft.storage, or run your own IPFS node
export const uploadToIPFS = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      // For demo purposes, we'll use a data URL
      // In production, this would return an IPFS hash
      resolve(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
};

export const validateImageFile = (file: File): boolean => {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  const maxSize = 10 * 1024 * 1024; // 10MB
  
  return validTypes.includes(file.type) && file.size <= maxSize;
};