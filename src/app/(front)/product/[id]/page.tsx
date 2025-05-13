type Props = {
  params: {
    id: string;
  };
};
export default async function ProductDetail({ params }: Props) {
  const { id } = await params;
  return (
    <>
      <h2>{id}</h2>
    </>
  );
}
