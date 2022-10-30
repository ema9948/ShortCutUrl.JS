import { toast } from "react-hot-toast";

export const notify = () => toast.success("Url Agregada")
export const notifyError = () => toast.error("Url no Valida.");
export const notifyDelete = () => toast.success("Url Eliminada")
export const notifyDeleteError = () => toast.error("Error al Eliminar Url")
export const notifyUpdate = () => toast.success("Url Actualizada");
export const notifyUpdateError = () => toast.success("Url Actualizada");
export const notifyCopy = () => toast.success("Url Copiada.")
export const notifyRegister = (value) => toast.success(value || "Cuenta registrada");
export const notifyRegisterError = (value) => toast.error(value || "Email En Uso.");
export const notifyLogin = (value) => toast.error(value)


