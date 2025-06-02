import { deploy } from "./deploy";

(function () {
  const tokenName = "Jay NFT";
  const tokenSymbol = "JNFT";
  const baseTokenURI = "ipfs://QmTLNtLN1RVPY2sqVFDoHQgPF4QHzsqwvaJyFcpQmbrDMp";
  const baseImageURI = "ipfs://QmTtyzT51nUbV1M9E9kJ7dH57223jrjsvvHzYip51Ut11V";

  void deploy("Mint", tokenName, tokenSymbol, baseTokenURI, baseImageURI);
})();
