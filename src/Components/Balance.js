export default function Balance() {
  return (
    <div className="balance">
      <div className="balance_text">
        <p className="my_balance_parag">My balance</p>
        <h1 className="balance_data">$921.48</h1>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/logo.svg"}
        alt="logo"
        width={80}
        className="logo"
      />
    </div>
  );
}
