import { FC } from "react";
import NoImg from '../assets/no-img-found.jpg';

type Props = {
    src: string | undefined,
    alt: string,
    classes: string | undefined
}

const Image: FC<Props> = ({ src, alt, classes }: Props) => {
    return (
        <img src={src || NoImg} alt={alt} className={classes} />
    );
}

export default Image;
