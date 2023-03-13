/** @format */

import Swal from "sweetalert2";
const Alert = title => {
  return Swal.fire({
    title: title,
  });
};

export { Alert };