import { ButtonHTMLAttributes, FC } from "react";
import VolumeEnabled from './volume-high-solid.svg'
import VolumeDisabled from './volume-xmark-solid.svg'
import style from './SoundButton.module.scss'
import clsx from "clsx";


/**
 * button to mute or unmute the whole app
 *  
 */

const SoundButton: FC<SoundButtonProps> = (props) => {
    const { active, onClick, className } = props
    const classList = clsx(style.soundBtn, className)

    return (
        <button role="button" onClick={onClick} className={classList}>
            {active ? <VolumeEnabled /> : <VolumeDisabled />}
        </button>
    )
}

export interface SoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Indicates whether the button is currently active (clicked).
     */
    active?: boolean
    /**
     * A callback that will be fired when the button is clicked.
     * This callback is generally used to toggle the state of the component.
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default SoundButton
