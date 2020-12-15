import React {Fragment} from 'react'
import jsPDF from 'jspdf'
import store from '../store/store'
import { useEffect } from 'react'

const Export2PdfPage = () => {
    
    const storeState = store.getState()
    
    useEffect(()=> console.log(storeState), [])
    const generatePdfTaskSummaryReport = () => {
        const doc:any = new jsPDF('p', 'mm', 'a4');
        const tableColumn = ['Task name ', 'From - to', 'Date created', 'Due date', '']
        
    //     doc.text("Tasks summary report", doc.internal.pageSize.width / 2, 10, 'center');

    //             const assignedTasksRows:any = []
    //             let assignedTasks = tasks.filter(x => x.createdById === infonetUserId &&  x.taskEventTypeId === taskEventTypeIDConst.created && x.taskEventTypeId === "5aa40b3a-43e7-4ce0-83b8-5f4e15b90124")
    //             for (let i = 0; i < assignedTasks.length; i++){
    //                 let data = [
    //                     ReplaceString(assignedTasks[i].name), 
    //                     ReplaceString(assignedTasks[i].createdBy) + ' - ' + ReplaceString(assignedTasks[i].createdFor),
    //                     FormatDate(assignedTasks[i].insertedAt.toString().slice(0,10)),
    //                     FormatDate(assignedTasks[i].dueDate.toString().slice(0,10)),
    //                    assignedTasks[i].daysTillDueDate.toString()
    //                 ]
    //                 assignedTasksRows.push(data) 
    //             }

    //     doc.text("Assigned tasks waiting to be accepted", 14, 20);
    //     doc.autoTable(tableColumn, assignedTasksRows, { startY: 25 });
    //             const tasksWaitingRows:any = []
    //             let tasksWaiting = tasks.filter(x => x.createdForId === infonetUserId && x.taskEventTypeId === "5aa40b3a-43e7-4ce0-83b8-5f4e15b90124")
    //             for (let i = 0; i < tasksWaiting.length; i++){
    //                 let data = [
    //                     ReplaceString(tasksWaiting[i].name), 
    //                     ReplaceString(tasksWaiting[i].createdBy) + ' - ' + ReplaceString(tasksWaiting[i].createdFor),
    //                     FormatDate(tasksWaiting[i].insertedAt.toString().slice(0,10)),
    //                     FormatDate(tasksWaiting[i].dueDate.toString().slice(0,10)),
    //                     tasksWaiting[i].daysTillDueDate.toString()
    //                 ]
    //                 tasksWaitingRows.push(data) 
    //             }

    //     let finalY = doc.lastAutoTable.finalY || 40
    //     doc.text("Tasks waiting for to accept them", 14, finalY + 10);
    //     doc.autoTable(tableColumn, tasksWaitingRows, {startY :finalY + 15});
        
    //         const plannedTasksRows:any = []
    //         let plannedTasks = tasks.filter(x => x.plannedDate.toString().substr(0, 10) === new Date().toISOString().substr(0,10))
    //         for (let i = 0; i < plannedTasks.length; i++){
    //             let data = [
    //                 ReplaceString(plannedTasks[i].name), 
    //                 ReplaceString(plannedTasks[i].createdBy) + ' - ' + ReplaceString(plannedTasks[i].createdFor),
    //                 FormatDate(plannedTasks[i].insertedAt.toString().slice(0,10)),
    //                 FormatDate(plannedTasks[i].dueDate.toString().slice(0,10)),
    //                 plannedTasks[i].daysTillDueDate.toString().slice(0,10)
    //             ]
    //             plannedTasksRows.push(data) 
    //         }
        
    //     finalY = doc.lastAutoTable.finalY || 55
    //     doc.text("Tasks planned for today", 14, finalY + 10);
    //     doc.autoTable(tableColumn, plannedTasksRows, {startY :finalY + 15});

    //     const overdueTasksRows:any = []
    //         let overdueTasks = tasks.filter(x => x.isOverDueDate && x.taskEventTypeId !== taskEventTypeIDConst.confirmedCompleted && x.taskEventTypeId !== taskEventTypeIDConst.confirmedRejected )
    //         for (let i = 0; i < overdueTasks.length; i++){
    //             let data = [
    //                 ReplaceString(overdueTasks[i].name), 
    //                 ReplaceString(overdueTasks[i].createdBy) + ' - ' + ReplaceString(overdueTasks[i].createdFor),
    //                 FormatDate(overdueTasks[i].insertedAt.toString().slice(0,10)),
    //                 FormatDate(overdueTasks[i].dueDate.toString().slice(0,10)),
    //                 overdueTasks[i].daysTillDueDate.toString()
    //             ]
    //             overdueTasksRows.push(data) 
    //         }

    //         finalY = doc.lastAutoTable.finalY || 70
    //         doc.text("Overdue tasks", 14, finalY + 10);
    //         doc.autoTable(tableColumn, overdueTasksRows, {startY :finalY + 15});

    //     doc.save("Task_Summary_Report_" + new Date().toISOString().slice(0,10)  + ".pdf");
        
    // }
    
    return (

        <Fragment>
            <div>
                <button>Downlaod pdf</button>
            </div>
        </Fragment>
    )
}
export default Export2PdfPage