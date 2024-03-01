import Task from "./task/task"

export default function TaskWrapper() {
    return(
        <div className="w-full flex flex-col items-center justify-between scroll-py-7 overflow-scroll">
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
}