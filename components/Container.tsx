interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full px-4 md:px-0 md:max-w-2xl">{children}</div>;
};

export default Container;
