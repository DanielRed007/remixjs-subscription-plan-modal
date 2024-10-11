export interface RowProps {
  icon: React.ElementType;
  text: string;
}

export const IconTextRow: React.FC<RowProps> = ({ icon: Icon, text }) => {
  return (
    <div className='flex items-center space-x-4 py-1'>
      <Icon className='w-6 h-6 text-white' />
      <span className='text-gray-300 text-sm'>{text}</span>
    </div>
  );
};
