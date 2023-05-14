import styles from "../styles/CardMembers.module.css"
import Image from "next/image";
import Link from "next/link";

const CardMembers = (props) => {
    return(
        <div className={ styles.container }>
            <Image src={ props.imagePath } alt="Team Member Picture" />
            <p className={ styles.nameText }>{ props.name }</p>
            <p className={ styles.majorYearText }>{ props.major }</p>
            <p className={ styles.majorYearText }>{ props.graduationyear }</p>
            <div className={styles.linkGroup}>
                <div className={styles.linkContainer}>
                    <Image src="/ArrowRight.svg" width="20px" height="20px" alt="Arrow Right" style={{ marginRight: 1 + "rem" }}/>
                    <Link href={ props.linkedInURL }><a className={styles.linkText}>LinkedIn</a></Link>
                </div>
                {
                    (props.portfolioURL)
                    ?
                    <div className={styles.linkContainer}>
                        <Image src="/ArrowRight.svg" width="20px" height="20px" alt="Arrow Right" style={{ marginRight: 1 + "rem" }}/>
                        <Link href={ props.portfolioURL }><a className={styles.linkText}>Portfolio</a></Link>
                        
                    </div>
                    :
                    <div/>
                }
            </div>
            
        </div>
    )
};

export default CardMembers;