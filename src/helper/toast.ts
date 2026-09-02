import Swal from "sweetalert2";
export const toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
  background: "#FFFFFF",
  color: "#171717",
  customClass: {
    popup: "modern-toast",
    title: "modern-toast-title",
    timerProgressBar: "modern-toast-progress",
  },
  showClass: {
    popup: "animate__animated animate__fadeInRight animate__faster",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutRight animate__faster",
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
