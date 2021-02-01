import React from 'react';
import PropTypes from "prop-types";

function Food({ name, pic, rating}) {
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {pic} alt = {name}></img>
    </div>
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const animalLike = [
  {
    id : 1,
    name: "강아지",
    image: "https://lh3.googleusercontent.com/fPzVzSoTTOaDoKsVtXjBXR5M5DYpceoh6C0PNYm0sp741PrCL26sRXOlujpKZuPUb7s-OGjQoP8MOWBaNJeirL9HPnULqs1oytNToXpoX6KPX2eThI4rIJ92ZPtbrdyjC4HFBSzHRp4j-7zWRjbloLgfTiLWJvS3Kbijhm-IDqvku4eTTRFGgce2z69zMaE7Wp3D6ZSbFamRP82XjjfBSvlBhf63hkVxQsSBMu1Rzbq8iVajq30lyg6w-r_pAusOcNvWnXJAKEm80GzoNsCzEc25KHcl9vA6ep_v1JHEdF0zjacFLSQZ8p0GGDKV-XotR76F00DZDsW2I4ks1Y0wc2KhYq-JJZrif3b0_sjr-F2DoKF8YZG0DyNn0KZAmSMAQCZ_1wGLr2edUikWw3P6xfqJL4S-h8sZcuKznnR9SUvAeOQKJdUdFSLI8mMHPCEKVhmoV-Pp1j0Kj1xNLg5EaLksf7x1xpD9UKLtfiJ4Oj6B6sJN5ceR9JhChSPXZPPCFl8tIF5K5co4FVqSAqHCJnZzJfryIrsW6II6ez58JQZqLZyI1WpZeJ04pOa9lwKm85R8PPawAkzGv_E4Ip1tbZLCnHrJT1ZMfmvOYZibhFvdunzmwvfrb9Euv_SA0wX-b27SQLn5kd0SONlUCjGfBdaxY6GHQKzFViyGVKueRIGuOC-pnil4Ys3BCHLIEw=w2190-h1642-no?authuser=0",
    rating: 5
  },
  {
    id: 2,
    name: "고양이",
    image: "https://lh3.googleusercontent.com/qxqLST7d7DTot_NOFOLjsShaHvGf3AbXcrVUWG7tcw_M4EpK7PixmfOwLKMGNGCXjq43pEu2UF0fsGGRVeuZmsA2Suhu0blORgXmlLpV8eeX0CSBavVVPV506svqAGXhw6PSLWMRN8ts49tzGinFChf-70dwoW5QRO_mLANC1bNAnxIUJ-doy4Sqd7WwGNCxgpU_Zx3l4rVfjU_PIQX9gWYFd-PMica4K8DTktPfdbjE9GsLosXHPLKDtXTHluEnUdnxuO8Skf9yNQVSirtUuR1ZXRoTi2LyAqXVK-riYT6yqqhGCsr88JELoo-NrzXZHqANNodYJOI5uwzD8PeTvJrlrthOUTrvAX0G5IhHCJ8D-hgDziYPa54hjEsulxlKn-ucaaypPNsK2Mf2RECmRmN8KTYyeO0z7peHTnJ9jpiPby9LztOTdj0OH9kWHpfbgOi_dLEYvEbpQ5_hbp3XYxZ9lRbpkdjRx81rQDKRqQSFoDWa883qsTXZvAI8ppDIrxtI4W5aq2kqkkIaMwRaiByguRpHLr1OlpxX7fcOOrOY8nERC6i8DsLl4fdX21JxouFGlvwayRDXd2g1nqFVjT4hnUHCjrLRBH8Wp4W6hvwmrLKOhXzQilM5XFKH7L4-QqdXIIBQeolD8jOH5j2gzinse3wveYCSY4lHdGaNry9BfZeaU2rQ_7Ubz2BBmA=w391-h220-no?authuser=0https://www.google.com/url?sa=i&url=https%3A%2F%2Fmypetlife.co.kr%2F47410%2F&psig=AOvVaw2bonWmewHomTTSUVIs3GZX&ust=1612256231519000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjsudKoyO4CFQAAAAAdAAAAABAD" ,
    rating: 4.9
  },
  {
    id: 3,
    name: "쿼카",
    image: "https://lh3.googleusercontent.com/eNSpHnYX8jt_gcFlxhhJR112y7Y0LBoJBdoJG-wsEpd5RRJHwNjdMmciNA5L7B7yYC1mWbnWmaCxADRTPdHyDdoJkZvmTgdxAx-pbi7-Usmapzpaf5guyziOph_-O1oghbxRFBoSSQPgdy7UKOVdly8sdjEmBkoa19lsvcPqelvqPARm_bJwnQ5_K5xS9faOhn07oBRn08T5BliOH3X37EWqPijs1L9qBBJQqRkOZKJK0G8eHSgbug_whEMvMjkBaDsoegHef_yCjEsWFi42YQVa1GSJdOpMw2H2CiTfqx-8xFYYlfuQfCrNYJaY3up1cnc0QEhgdn_p3iudHn_Rz9oRscTbGlYdnRg2qZf1PvspDTfudirlC7aN5N7tFvrQvqOYKgK5FP5QikJ61s67LqNX2lfGnZUmc5Gwz73gfEF9goPklqkDcIcn_f3czH8uFUYvhpANdH9FCMT3Xm63NtEosoVjUNCrPaSVqTivULfa3k2_UR9HIu3Bl80Uh76Aue4IMfmvpvLgpfDgby40HR-ukebq1G9ADPKb7HB1izsIuKsy-bJlR2aT7ZFUL_jhHQ3F2DFT6oMCuP3b1HPc9W9T3KgRKBFmsXckeg5zodqjGV7qp9syo4cbIyu_DR2TwdElNTzmjRD-HM2PFLU6vVhX3f2zEEzbeEPdvb0F1HJOGJJX6m2-mT_jEprKDQ=w750-h1000-no?authuser=0",
    rating: 4.8
  }

]

function App() {
  return (
    <div> 
      {animalLike.map(dish => (
        <Food key={dish.id} name = {dish.name} pic = {dish.image} rating = {dish.rating} />
      ))}
    </div>
  );
}

export default App;
