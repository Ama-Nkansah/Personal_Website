function ApproachCard({ icon, title, text }) {
  return (
    <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-fuchsia-400">
      <div className="text-fuchsia-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {text}
      </p>
    </div>
  );  
}

export { ApproachCard };