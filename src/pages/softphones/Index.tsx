import { useRef, useState } from "react";
import { Button } from "../../components/Index";
import { Phone, Mute, EndCall, Unmute } from "../../components/icons/Index";
import styles from './style.module.css'

type constrainsType = {
    audio: boolean,
    video: boolean
}

const Index = () => {
    const [audioStatus, setAudioStatus] = useState<boolean>(true);
    const [callStatus, setCallStatus] = useState<string>("");
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
    const [callBtnDisableStatus, setCallBtnDisableStatus] = useState<boolean>(false)
    const intervalRef = useRef<number>(0);
    const timeRef = useRef<HTMLDivElement>(null);
    const secondCountRef = useRef<number>(0);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleChnageCallAudio = () => {
        const audioTrack = mediaStream?.getAudioTracks()[0];
        if (audioTrack) {
            audioTrack.enabled = !audioTrack.enabled;
            audioRef.current!.muted = audioStatus;
            setAudioStatus(audioTrack.enabled);
        }
    }

    const openMediaDevices = async (constraints: constrainsType) => {
        return await navigator.mediaDevices.getUserMedia(constraints);
    }


    const handleCallStart = async () => {
        setCallBtnDisableStatus(true)
        secondCountRef.current = 0;
        const mediaStream = await openMediaDevices({
            audio: true,
            video: true
        });
        setMediaStream(mediaStream);
        if (videoRef.current && audioRef.current) {
            videoRef.current.srcObject = mediaStream
            audioRef.current.srcObject = mediaStream
        }
        setCallStatus("Zəng başladı");
        setTimeout(() => {
            setCallStatus("davam edir")
        }, 1000);
        intervalRef.current = setInterval(calculateCallTimer, 1000)

    }
    const handleCallEnd = () => {
        clearInterval(intervalRef.current);
        setCallStatus("sonlandı");
        if (mediaStream) {
            stopStream(mediaStream);
        }
        setMediaStream(null);
        setCallBtnDisableStatus(false);
    }

    const stopStream = (stream: MediaStream) => {
        stream.getTracks().forEach(track => {
            track.stop()
        });
    }
    const calculateCallTimer = () => {
        secondCountRef.current += 1;
        const minutes = Math.floor(secondCountRef.current / 60);
        const second = secondCountRef.current % 60;
        if (timeRef.current) {
            timeRef.current.innerHTML = `Müddət: ${minutes} dəq ${second} saniyə`
        }

    }


    return (
        <div className={styles.container}>
            <div className={styles.title}>Softphone UI</div>
            <div className={styles.callLayout}>
                <div>Zəngin statusu:{callStatus}</div>
                <div ref={timeRef}>Müddət:0 dəq 0 saniyə</div>
                <audio ref={audioRef} autoPlay controls className={mediaStream ? "" : styles.audioHidden}></audio>
                <video className={mediaStream ? '' : `${styles.videoHidden}`} ref={videoRef} autoPlay playsInline muted width={400} height={300} />
            </div>
            <div className={styles.callPanel}>
                <Button disabled={callBtnDisableStatus} icon={<Phone />} variant='success' text='Zəngi Başlat' onClick={handleCallStart} />
                <Button
                    icon={audioStatus ? <Unmute /> : <Mute />}
                    variant='warning' text={audioStatus ? 'Səsi bağla' : "Səsi aç"}
                    onClick={handleChnageCallAudio}
                />
                <Button
                    icon={<EndCall />}
                    variant='danger'
                    text='Zəngi Sonlandır'
                    onClick={handleCallEnd}
                />
            </div>
        </div>
    )
}

export default Index;