import { useEffect, useState } from "react";
import styles from "./footer.module.scss";
import useTodayWeatherService from "../../services/TodayWeatherService";
import githubIcon from '../../assets/images/github.svg';
import telegramIcon from '../../assets/images/telegram.svg';
import mailIcon from '../../assets/images/mail.svg';

type Title = 'GitHub' | 'Telegram' |  'Mail'
interface LinkItem {
  id: number;
  title: Title;
  url: string;
  image: string;
}
const Footer = () => {
    const iconMap = {
        'GitHub': githubIcon,
        'Telegram': telegramIcon,
        'Mail': mailIcon

    }
    const [links, setLinks] = useState<any>();

    const {getLinks} = useTodayWeatherService();

    useEffect(() => {
        getLinks().then((res) => setLinks(res))
    }, [])

    const renderLinks = function(list: LinkItem[]) {
        return list.map((item: LinkItem, i:number) => {
            const {id, title, url} = item
            return (
                <li className={styles.link} key={id}>
                    <a href={url} className={styles.link__url}><img className={styles.link__img} src={iconMap[title]} alt={title}></img></a>
                    <span className={styles.link__title}>{title}</span>
                </li>
            )
        })

    }
    return (
        <footer className={styles.footer}>
            <ul className={styles.footer__links}>
                 {links ? renderLinks(links) : null}
            </ul>
        </footer>
    )
}

export default Footer;