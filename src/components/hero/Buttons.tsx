import '@/assets/styles/_variables.scss'

interface ButtonsProps {
    title: string;
}

export const Buttons: React.FC<ButtonsProps> = ({ title }) => {
    return (
        <button type="button" className="btn text-white bg-bg-400 px-3 py-3 w-100 ">
            {title}
        </button>
    )
}