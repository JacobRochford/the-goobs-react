import { ALBUM_DATA } from "../../../../albumdata";
import { server } from "../../../../config";

export default function handler(req, res) {
  res.status(200).json(ALBUM_DATA)
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/albums`);
//   const albums = await res.json();

//   return {
//     albums
//   };
// };