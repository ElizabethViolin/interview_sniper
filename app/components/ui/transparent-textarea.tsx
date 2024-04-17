import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

type TransparentTextareaProps = {
  className?: string; 
} & React.ComponentProps<typeof TextareaAutosize>; 

const TransparentTextarea: React.FC<TransparentTextareaProps> = ({ className = '', ...props }) => {
  const baseStyle = 'w-full bg-transparent border-none resize-none outline-none focus:outline-none focus:ring-0';
  const finalStyle = `${baseStyle} ${className}`; 

  return (
    <TextareaAutosize
      rows={1}
      maxRows={15}
      className={finalStyle}
      {...props} 
    />
  );
};

export default TransparentTextarea;
