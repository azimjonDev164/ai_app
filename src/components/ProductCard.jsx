export default function ProductCard() {
  return (
    <div className="mr-2 overflow-hidden bg-white relative rounded-[16px]">
      <img
        className="w-full h-full object-cover"
        src="https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gUTvQuVPUxUYX1CEj-N3lW5eRFLlkGrU_cwwwOWxOh8="
        alt="apple"
      />
      <div className="flex absolute bottom-2 left-2 items-center gap-2 bg-white/70 backdrop-blur-md p-1 rounded-lg">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://photos.peopleimages.com/picture/202306/2837133-png-studio-shot-of-a-handsome-man-pointing-to-copyspace--fit_400_400.jpg"
          alt="person"
        />
        <p className="text-sm font-semibold">Azimjon Polvonov</p>
      </div>
    </div>
  );
}
