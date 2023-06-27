import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store";
import { is } from "date-fns/locale";

export const  useUiStore = () => {

   const dispatch = useDispatch();
    
   const {
    isDateModalOpen
   } = useSelector( state => state.ui)

   const openDateModal = () =>{
        dispatch( onOpenDateModal() )
   }

   const closeDateModal = () =>{
     dispatch( onCloseDateModal() )
   }
   /* const toggleDateModal = () =>{
      (isDateModalOpen)
      
   } */
   
   return {
    
    //!Propiedades
    isDateModalOpen,

    //!Metodos
    openDateModal,
    closeDateModal,
   
    }
}