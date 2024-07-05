import { Header, Paragraph } from 'shadcn/ui';

const Index = () => {
  return (
    <div className="text-center p-6">
      <Header className="text-4xl font-bold mb-4">Welcome to Your New App</Header>
      <Paragraph className="text-lg text-gray-700">
        This is a simple home page created using shadcn components and Tailwind CSS.
      </Paragraph>
    </div>
  );
};

export default Index;
