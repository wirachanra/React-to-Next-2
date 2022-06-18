import member from './member.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const BandMemberCard = (props) => {
  return (
    <div className="band-member-card">
      <p>{props.name}</p>
      <Link href={`/member/${props.id}`}>
          <Image src={member} alt="" />
        </Link>
    </div>
  )
}

export default BandMemberCard