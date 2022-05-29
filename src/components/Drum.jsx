import { Howl } from 'howler';

import './Drum.css'

import snareSound from '../SOUNDS/drums/snare.wav'
import kickSound from '../SOUNDS/drums/kick.wav'
import { useRef } from 'react';

function Drum() {
    const snareElem = useRef("")
    const kickElem = useRef("")

    const dataSounds = [
        { key: "S", sound: snareSound, soundType: snareElem },
        { key: "K", sound: kickSound, soundType: kickElem },
    ]

    const soundPlay = (sound) => {
        new Howl({
            src: [sound]
        }).play()
    }

    const setActive = (i) => {
        i.current.classList.add("active")

        setTimeout(() => {
            i.current.classList.remove("active")
        }, 250);
    }

    const getKey = (dataSounds) => {
        document.onkeydown = (e) => {
            dataSounds.forEach(i => {
                if (e.code === `Key${i.key}`) {
                    soundPlay(i.sound)

                    setActive(i.soundType)
                }
            })
        }
    }

    const onSoundClick = (sound, elem) => {
        soundPlay(sound)

        setActive(elem)
    }

    getKey(dataSounds)

    return (
        <div id="snare-block">
            <img src="https://spb-music.ru/upload/iblock/a44/a44f3ebdafbc449a93cc198fef4143bc.jpg" alt="" onClick={() => onSoundClick(snareSound, snareElem)} ref={snareElem} />
            <img src="https://i.pinimg.com/originals/88/49/4b/88494bb2f797e1fda9548b858865464f.jpg" alt="" onClick={() => onSoundClick(kickSound, kickElem)} ref={kickElem} />
        </div>
    );
}

export default Drum;