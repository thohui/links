import { useForm } from "react-hook-form";
import { URLRegex } from "../../utils/regex";
import { trpc } from "../../utils/trpc";
import { ErrorAlert } from "../alert/ErrorAlert";
import { SuccessAlert } from "../alert/SuccessAlert";

export const CreateLinkForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isError, isSuccess, mutate, error } =
    trpc.useMutation("link.create-link");
  const onSubmit = (data: any) => mutate(data);
  return (
    <div className=" px-10 py-10  flex justify-center items-center flex-col min-h-full w-1/3">
      {isSuccess && <SuccessAlert text="Succesfully created link" />}
      {isError && <ErrorAlert text={error.message} />}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <label className="label" htmlFor="slug">
          <p className="label-text">Slug</p>
        </label>
        <input
          type="text"
          className="input input-bordered w-full "
          {...register("slug", { required: true })}
        />
        {errors.slug && <p className="error">This field is required</p>}
        <label className="label" htmlFor="url">
          <p className="label-text">URL</p>
        </label>
        <input
          type="text"
          className="input input-bordered w-full"
          {...register("url", { required: true, pattern: URLRegex })}
        />
        {errors.url && <p className="error">Please use a valid URL</p>}
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};
