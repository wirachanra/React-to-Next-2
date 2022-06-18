import Image from "next/image";
import band from "../../assets/band.jpeg"

function BandContainerSection() {
 return (
    // <section id="home">
    <div className="jumbotron">
      <Image src={band} alt="our band tampil in LA, Lenteng Agung" width={1349} height={607}/>
      <div className="band-caption">
        <h3>Kangen Band</h3>
        <p>Band babang tamvan</p>
      </div>
    </div>
  // </section>
 )

    
}

export default BandContainerSection
