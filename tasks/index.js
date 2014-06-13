module.exports = function (grunt) {

    grunt.config('path', {
        dest: 'public',
        tmp: '.tmp',
        src: 'src'
    });

    grunt.loadTasks('tasks/compile');
    grunt.loadTasks('tasks/helper');


    grunt.config('clean.dev', {
        src: [
            '<%= path.dest %>'
        ]
    });


    grunt.config('concurrent.dev', {
        tasks: ['connect:devServer', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    });


    grunt.registerTask('build', ['clean:dev', 'browserify.libs', 'browserify']);

    grunt.registerTask('default', ['build', 'concurrent:dev']);

    return grunt;
};