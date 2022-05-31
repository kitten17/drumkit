import { useRef } from 'react';

import { Howl } from 'howler';

import './Drum.css'

import snareSound from '../../SOUNDS/drums/snare.wav'
import kickSound from '../../SOUNDS/drums/kick.wav'
import hihatSound from '../../SOUNDS/drums/hihat.wav'
import cymbalSound from '../../SOUNDS/drums/cymbal.wav'

function Drum() {
    const snareElem = useRef("")
    const kickElem = useRef("")
    const hihatElem = useRef("")
    const cymbalElem = useRef("")

    const dataSounds = [
        { key: "D", sound: hihatSound, soundType: hihatElem },
        { key: "F", sound: snareSound, soundType: snareElem },
        { key: "J", sound: kickSound, soundType: kickElem },
        { key: "K", sound: cymbalSound, soundType: cymbalElem },
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
        <div id="drum-block">
            <button>
                <img src="https://qph.fs.quoracdn.net/main-qimg-0e3d263d03086f3342db43cc20677244" alt=""
                    onClick={() => onSoundClick(hihatSound, hihatElem)}
                    ref={hihatElem}
                    id="hihat-drum" />
            </button>

            <button>
                <img src="https://spb-music.ru/upload/iblock/a44/a44f3ebdafbc449a93cc198fef4143bc.jpg" alt=""
                    onClick={() => onSoundClick(snareSound, snareElem)}
                    ref={snareElem}
                    id="snare-drum" />
            </button>

            <button>
                <img src="https://i.pinimg.com/originals/88/49/4b/88494bb2f797e1fda9548b858865464f.jpg" alt=""
                    onClick={() => onSoundClick(kickSound, kickElem)}
                    ref={kickElem}
                    id="kick-drum" />
            </button>

            <button>
                <img src="https://static.turbosquid.com/Preview/2014/07/07__20_05_56/drum-ride+cymbal.jpg84e35ae0-1c50-477d-aa4a-81eefadc5eacLarge.jpg" alt=""
                    onClick={() => onSoundClick(cymbalSound, cymbalElem)}
                    ref={cymbalElem}
                    id="cymbal-drum" />
            </button>
        </div>
    );
}

export default Drum;