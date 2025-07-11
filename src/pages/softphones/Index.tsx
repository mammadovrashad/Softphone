import { useState } from "react";
import { Button } from "../../components/Index";
import { Phone, Mute, EndCall, Unmute } from "../../components/icons/Index";
import styles from './style.module.css'


const Index = () => {
    const [audioStatus, setAudioStatus] = useState<boolean>(false);
    const [callStatus, setCallStatus] = useState<string>("");
    const handleChnageCallAudio = () => {
        setAudioStatus(!audioStatus);
    }
    const handleCallStart = () => {
        const constraints = {
            'video': true,
            'audio': true
        }
        navigator.mediaDevices.getUserMedia(constraints)
            .then(stream => {
                console.log('Got MediaStream:', stream);
            })
            .catch(error => {
                console.error('Error accessing media devices.', error);
            });
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>Softphone UI</div>
            <div className={styles.callLayout}>
                <span>Zəngin Statusu:{ }</span>
                <span>Müddət:{ }</span>
            </div>
            <div className={styles.callPanel}>
                <Button icon={<Phone />} variant='success' text='Zəngi Başlat' onClick={handleCallStart} />
                <Button
                    icon={audioStatus ? <Mute /> : <Unmute />}
                    variant='warning' text={audioStatus ? 'Səsi bağla' : "Səsi aç"}
                    onClick={handleChnageCallAudio}
                />
                <Button icon={<EndCall />} variant='danger' text='Zəngi Sonlandır' />
            </div>
        </div>
    )
}

export default Index;