import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    description: string;
    contribution?: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlDemo, description, contribution } = data;

  return (
    <div
      key={id}
      className="p-4 border border-teal-50 rounded-xl flex space-y-3 flex-col"
    >
      <h3 className=" text-center font-semibold">{title}</h3>
      <div className="relative flex justify-center w-full h-auto  aspect-square mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain "
          sizes="(max-width: 750px) 70vw, 200px"
          priority
        />
      </div>

      <Link
        href={urlDemo}
        target="_blank"
        className="w-full text-center p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
      >
        Live demo
      </Link>
      <p className="mt-2 text-sm text-justify text-gray-300">{description}</p>
      <p className="mt-1 text-xs text-justify text-secondary">{contribution}</p>
    </div>
  );
};

export default PortfolioBox;
