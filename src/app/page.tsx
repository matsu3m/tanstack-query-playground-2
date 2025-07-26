export default function Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <a href="/prefetch-await">prefetch-await</a>
      <a href="/prefetch-streaming">prefetch-streaming</a>
      <a href="/experimental-streaming">experimental-streaming</a>
    </div>
  );
}
